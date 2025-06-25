-- Initial database setup for Movie Vibes
-- This script runs when PostgreSQL container starts for the first time

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "citext";

-- Create development and test databases
CREATE DATABASE movie_vibes_dev;
CREATE DATABASE movie_vibes_test;