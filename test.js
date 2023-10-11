There are various programming languages that could be used to create or update files and return their contents. Here is an example using Python:

```python
# Define the file names
file_names = ['test.js']

# Function to create or update files
def create_or_update_files(file_names):
    updated_contents = []  # List to store updated file contents
    
    for file_name in file_names:
        # Read current contents of the file
        with open(file_name, 'r') as file:
            contents = file.read()
        
        # Write updated contents to the file
        with open(file_name, 'w') as file:
            # Update the contents according to the instructions
            updated_contents.append('Write test cases for login..')
            file.write(updated_contents[-1])  # Write the last updated content
    
    return updated_contents

# Call the function and store the updated file contents
updated_file_contents = create_or_update_files(file_names)

# Print the updated file contents
for content in updated_file_contents:
    print(content)
```

This Python code creates or updates the file 'test.js' with the instruction "Write test cases for login..". It then returns the updated contents of the file.