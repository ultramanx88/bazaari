-- Initialize Bazaari Database
-- This file will be executed when the PostgreSQL container starts

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create additional schemas if needed
-- CREATE SCHEMA IF NOT EXISTS bazaari;

-- You can add initial data here if needed
-- INSERT INTO users (email, name, password, role) VALUES 
-- ('admin@bazaari.com', 'Admin User', 'hashed_password', 'admin');

-- Log initialization
SELECT 'Bazaari database initialized successfully!' as message;