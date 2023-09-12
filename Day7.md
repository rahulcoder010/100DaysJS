python
import os

blog_text = """
            Cyber security is an essential field in today's interconnected world...
            [Content of blog goes here, replacing this placeholder text]
            """

file_path = "Day7.md"

# checks if the file already exists
if os.path.exists(file_path):
    with open(file_path, "a") as blog_file:  # append mode
        blog_file.write(blog_text)
else:
    with open(file_path, "w") as blog_file:  # write mode
        blog_file.write(blog_text)
