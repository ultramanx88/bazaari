#!/bin/bash

# Bazaari Mail Server Setup Script
echo "🚀 Setting up Bazaari Mail Server..."

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p docker-data/dms/{mail-data,mail-state,mail-logs,config}
mkdir -p docker-data/roundcube-db
mkdir -p certs

# Set proper permissions
chmod -R 755 docker-data/
chown -R 5000:5000 docker-data/dms/

# Generate SSL certificates (Let's Encrypt)
echo "🔐 Setting up SSL certificates..."
if command -v certbot &> /dev/null; then
    echo "Using certbot for SSL certificates..."
    certbot certonly --standalone -d mail.bazaari.com --email admin@bazaari.com --agree-tos --non-interactive
    
    # Copy certificates to docker volume
    cp /etc/letsencrypt/live/mail.bazaari.com/fullchain.pem certs/
    cp /etc/letsencrypt/live/mail.bazaari.com/privkey.pem certs/
else
    echo "⚠️  Certbot not found. Please install certbot or manually place SSL certificates in ./certs/"
fi

# Start mail server
echo "🐳 Starting Docker Mail Server..."
docker-compose -f docker-compose.mail.yml up -d

# Wait for services to start
echo "⏳ Waiting for services to start..."
sleep 30

# Setup mail accounts
echo "👥 Setting up mail accounts..."
docker exec bazaari-mailserver setup email add admin@bazaari.com admin_password_here
docker exec bazaari-mailserver setup email add partners@bazaari.com partners_password_here
docker exec bazaari-mailserver setup email add noreply@bazaari.com noreply_password_here
docker exec bazaari-mailserver setup email add support@bazaari.com support_password_here

# Setup aliases
echo "📧 Setting up email aliases..."
docker exec bazaari-mailserver setup alias add postmaster@bazaari.com admin@bazaari.com
docker exec bazaari-mailserver setup alias add webmaster@bazaari.com admin@bazaari.com
docker exec bazaari-mailserver setup alias add abuse@bazaari.com admin@bazaari.com

# Generate DKIM keys
echo "🔑 Generating DKIM keys..."
docker exec bazaari-mailserver setup config dkim

# Show DKIM public key for DNS setup
echo "📋 DKIM Public Key (add this to your DNS):"
docker exec bazaari-mailserver cat /tmp/docker-mailserver/opendkim/keys/bazaari.com/mail.txt

echo "✅ Mail server setup complete!"
echo ""
echo "🌐 Services:"
echo "  - SMTP: mail.bazaari.com:587 (STARTTLS)"
echo "  - IMAP: mail.bazaari.com:993 (SSL)"
echo "  - Webmail: http://localhost:8080"
echo ""
echo "📝 Next steps:"
echo "1. Add DNS records (MX, SPF, DKIM, DMARC)"
echo "2. Test email sending/receiving"
echo "3. Configure firewall rules"
echo "4. Set up monitoring"
echo ""
echo "🔧 Management commands:"
echo "  - Add user: docker exec bazaari-mailserver setup email add user@bazaari.com password"
echo "  - List users: docker exec bazaari-mailserver setup email list"
echo "  - View logs: docker logs bazaari-mailserver"