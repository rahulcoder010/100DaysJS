import os
from github import Github

# Get the access token from environment variable
access_token = os.environ.get('GITHUB_ACCESS_TOKEN')

# Replace with the repository name
repo_name = 'YOUR_REPO_NAME'

# Replace with the commit message
commit_message = 'YOUR_COMMIT_MESSAGE'

# Replace with the file path to be committed
file_path = 'YOUR_FILE_PATH'

# Connect to GitHub using the access token
g = Github(access_token)

try:
    # Get the repository
    repo = g.get_repo(repo_name)

    # Read the file content
    with open(file_path, 'r') as file:
        content = file.read()

    # Create a new file in the repository
    repo.create_file(file_path, commit_message, content)

    print('Commit created successfully!')
except Exception as e:
    print('An error occurred:', str(e))