python
import os

# File content
file_content = """
# Machine Learning and AI
Machine Learning and AI are rapidly transforming our world with innovative technologies. They have a significant impact on our everyday lives...
...(content is omitted for brevity)...
# you will need to write and complete the content here upto 300 words.
"""

# Check for file existence and update or create accordingly
if os.path.exists("Day3.md"):
    with open("Day3.md", "r+") as file:
        contents = file.read()
        file.seek(0, 0)
        file.write(file_content.rstrip('\r\n') + '\n' + contents)
else:
    with open("Day3.md", "w") as file:
        file.write(file_content)

