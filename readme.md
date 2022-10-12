# fastapiwisequotes


# Tech Stack
- Fast API
- Python 3.9+
- Poetry
- Postgres
- SQL Alchemy 1.4+
- Alembic
- Pydantic
- Black
- Flake8
- Pre-commit

## Overview & Requirements

This is a learning management system where teachers can manage student and students can see their courses.

- can perform CRUD operations
- can create quotes 
- can create authors
- 
- 
- 

## Running the App Locally

1. Make sure Python, Poetry, and Postgres are installed. Postgres must be running. *If you need help with this, please follow the instructions in the video linked at the top of this README.*
2. Create a virtual environment: `python -m venv venv`
3. Install packages: `poetry install`
4. Run the development server: `uvicorn main:app --reload`

## Schema 

**User**

- email: str
- role: enum (user, admin)
- gender: enum
- 

**Profile**

- first_name: str
- last_name: str
- mobile: int
- user_id: fk

**categories**

- categoryid: int
- parent-categoryid:int
- name: str
- about:  str (TextField)
- user_id: fk


**ContentBlock**

- title
- description
- type
- url
- content
- section_id


