import requests

def make_commit(repo, commit_message):
    url = f"https://api.github.com/repos/{repo}/commits"
    headers = {
        "Accept": "application/vnd.github.v3+json"
    }
    data = {
        "message": commit_message
    }
    response = requests.post(url, headers=headers, json=data)
    return response.status_code

repo = "username/repo"
commit_message = "Initial commit"
make_commit(repo, commit_message)