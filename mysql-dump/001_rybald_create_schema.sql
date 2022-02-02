CREATE SCHEMA IF NOT EXISTS rybald;
CREATE DATABASE IF NOT EXISTS rybald;
USE rybald;


CREATE TABLE IF NOT EXISTS rybald.skill (
  id VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  photosKey VARCHAR(255),

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rybald.experience (
  id VARCHAR(255),
  position VARCHAR(255) NOT NULL,
  employer VARCHAR(255) NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE,
  description TEXT,
  logoKey VARCHAR(255),
  photosKey VARCHAR(255),

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rybald.hobby (
  id VARCHAR(255),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  photosKey VARCHAR(255),

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rybald.photo (
  id VARCHAR(255),
  photoKey VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  filePath VARCHAR(255) NOT NULL,

  PRIMARY KEY (id, type)
);
