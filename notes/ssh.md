# SSH 

## Bruno's Request 
- First Task: Set Up SSH With GitHub 

## Introduction to SSH 
- Secure Shell is a protocol 
- Protocol - an agreement of how to communicate between two computers on the internet 
  - HTTP - files between browsers and servers
  - FTP - allows you to upload files 
  - HTTPS - encrypted files between browsers and servers 
  - SSH - another way to communicated 
- SSH 
  - A protocol to use over shell 
  - The shell is your operating system 
  - Client <-- Internet  --> HOST 

## SSH Command 
- ssh {user}@{host} - ssh command 
- Digital Ocean - gives servers for very cheap 
  - Droplets are there version of server 
  - Most servers use Ubuntu 
  - You can copy and paste the IP address they provide you in your own terminal 
- When using Linux or Mac using SSH is very simple, there are more steps for windows users 
- How does this apply to web development? 
  - SSH is a very important concept because you will use all the time 
  - Example: Connecting to GitHub 
    - Pushing, pulling, etc 
  - Example: SSH your home computer 
  - Example: npm install -- ssh into server get the project files and get the app back up and running 

## Optional: Digital Ocean Set Up 
- Code to receive $200 in credit, but only valid for 60 days, make sure to cancel 
- Commands we will be using in the next lecture: 
  - apt-get : https://help.ubuntu.com/community/AptGet/Howto 
  - rsync : https://www.tecmint.com/rsync-local-remote-file-synchronization-commands/ 

## Quick Note: SSH Key In Previous Video 
- Note on UI change in Digital Ocean for Upcoming Video Setup 

## Resources: SSH Command 
- Recommended setup for Linux and Windows users 

## Saving The Day Through SSH 
- When you get a call in the middle of the night the app was deleted from the server 
  - You can access your server through ssh 
    - `ssh root@167.99.146.57`
  - If you don't have git 
    - `sudo apt-get git install` 
  - You then go to the Github repo and clone it down with HTTPS or SSH 
  - To install the packages again
    - `sudo apt-get install nodejs` 
    - `sudo apt-get install npm` 
- You can run these commands on your computer and your local desktop 
- If you just want to bring a script on our computer up to our server 
  - Go to your directory 
  - `rsync -av . root@167.99.146.57:~/superawesome.com`
  - Then ssh back into your box, you will see your file was added to the remote server 

## Optional: Digital Ocean Server
- A link to an article about setting up your own virtual hosting like GoDaddy or Hostgator do 
- https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04

## How SSH Works
- Three techniques used in SSH 
  - Symmetrical Encryption 
  - Assymmetrical Encryption 
  - Hashing 
- These can come up when you work with HTTPS, blockchain, etc. 

## Symmetric Encryption 
- Encryption is a way to hide or jumble up text so a third-party can't read, so it is a way to have secrets
- Symmetrical Encryption uses one secret key for encryption and decryption 
  - Computer ("Hello") <-- key -- Encrypted Message ("E1320+@2") -- key -->  Other computer ("Hello")
- Anyone that has the key can decrypt the message
  - If someone finds the key they can decrypt the message 
- Key exchange algorithm - secure way to exchange these keys without any bad actors intercepting it 
  - The key is never actually transmitted 
  - The computers share public pieces of data and then manipulate it to capture the key 
  - The secret key is specific to each SSH session 
    - Generated prior to client authentication 
    - All packets moving between these machines must contain the key 

## Assymetric Encryption 
- Assymmetrical Encryption 
  - Uses two separate keys for encryption and decryption 
    - We have public keys and private keys 
      - Public 
        - Can be shared and out in the open 
      - Private 
        - The absolute secrets you should never share with anyone 
        - Cannot mathematically compute with the public key 
    - It's a one way relationship 
  - A message that is introduced by the machines public key can only be decrypted by the same machines private key - it's a one way relationship 
- Example 
  - Your computer receives a message from your friend's computer's public key and you send your public key back 
    - When it gets encrypted and your friend's computer can use it's private key to read your message because you sent your public key 
- SSH only uses assymetric encryption when using the key exchange algorithm 
- Diffie Hellman Key Exchange 
  - If we want to learn more about this there will be resources provided to learn more 
  - We're using the Diffie Hellman Key Exchange right now using our computer's to access this course 

## Resources: Assymetric Encryption 
- Resources on learning more about Diffie Hellman 

## Hashing 
- Since Assymetric Encryption is more time consuming, more SSH connections use Symmetric Encryption 
  - Assymmetric encryption is used to share a private key 
- Someone can be the middleman 
  - To solve this problem, we use hasing 
- Hashing 
  - Another form of cryptography used in secure shell connections 
  - Hashes are never meant to de-crypt anything 
  - They simply generate a unique value of a fixed length for each input that it gets 
  - They are one way -- looking at a hash it is impossible for anyone to go back 
- With hashes we're able to verify the authentication of the messages 
  - This is done using HMAC
    - Hash Pased Methods Authentication Codes 
  - HMAC 
    - Using a hash function each message that is transmitted must contain something called a MAC 
      - MAC is a hash function generated from the symmetric key, the packet sequence number, and the message contents that we're sending
  -  The client sends a password gets put into a hash function that returns a string that means nothing and then this is sent to the host 
    -  The host checks for the same information, they can use their own symmetric key, which is the same as the client's, they can use the packet sequence number and because this message was sent through SSH, they also have that message that was sent, then it gets run through the same hash function and then calculates it and checks for the hash 
    -  Change any single thing, it will spit out a different number when it comes to hashes 

## Passwords Or SSH? 
- How SSH works 
  - Diffie-Hellman Key Exchange 
  - Arrive at Symmetric Key 
  - Make sure of no funny business 
  - Authenticate User 
- If you SSH into anything, we get asked for a password 
  - There's two ways to authenticate into a server 
    - A password - sent after the SSH key was created -- it is a bad idea to use with SSH 
    - SSH - how you can avoid sending passwords 

## SSH Into A Server 
- So when using SSH, we're going to use something called RSA (allows us to provide or prove our identity without a password)
- You should have a .ssh folder -- it's a hidden file, so you may need to allow hidden files 
  - You need a id_rsa.pub 
  - We need to generate a public and a private key for digital ocean 
    - To do this, you use the ssh-keygen command 
    - `ssh-keygen -C "test@gmail.com"`
      - -C - comment - provides a new comment 
    - If you have more than one rsa key you may want to use the name of what it is for 
- .pub - this is the public key - never share the one without the .pub or else your encryption will be useless 
  - You can share the public one all you want 
- You can copy the key and share it with digital ocean by: 
  - `pbcopy < ~/.ssh/${key_filename}.pub`
- Then you can make a public key on the server through the terminal 
  - Depends on the server, but you typically have `known_hosts` and `authorized_keys` files
  - nano - allows us to update files 
  - We can add our pub key into the authorized key file 
  - If you get denied, you may have multiple rsa 
  - In the .ssh folder - use the ssh-add command with the link to the right ssh key 
- Most places will have a UI where you can add the SSH key instead of having to do it via terminal 

## Resources: SSH Into A Server 
- Recommended `ssh-keygen` command:
  - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

## Quick Note: SSH Into a Server 
- For digital ocean servers you cannot add ssh keys to already created droplets, so you would have to create a new server or add manually to the authorized_keys 

## Exercise: Set Up SSH On GitHub 
- This exercise has us setting up SSH on Github 
- You can use the dashboard and add SSH keys via our account settings 
- Why use SSH over HTTPS? 
  - HTTPS you have to enter the password - this gets tedious when you're working with a lot of repos 
  - SSH makes things a lot easier 

## Extra Solution: Set Up SSH On GitHub 
- Link to resource on a visual guide for setting up your SSH key on GitHub: https://github.com/antonykidis/Setup-ssh-for-github/blob/master/Setup-ssh-on-github.pdf

## Solution: Set Up SSH On GitHub 
- Walkthrough of how to set up the SSH key on Github 
- Keys show up as black and then switch to green once you've logged in locally and it worked on GitHub 
- To manage all ssh identities - `ssh-add -l`
- To delete ssh identities - `ssh-add -D`
- We now have a way to communicate with any server we want for example using raspberry pi's - you can hop from one computer to the next 

## Optional: Contributing To Open Source Projects
- Note on how to contribute to open source projects
- You can also contribute to ZTM's open source projects during their events like Advent of Code, HAcktoberfest, etc.

## Section Summary 
- What we've learned 
  - Diffie Hellman Key Exchange 
  - Arrive at Symmetric Key 
  - Make sure of no funny business 
  - Authenticate User 
    - Can use 
      - password 
      - RSA 
      - RSA + SSH
- This has helped us understand how Github works
  - We're the client and we want to connect to GitHub (remote host, just a server that holds our code)
    - Github is able to have multiple SSH keys on their server to make sure that they allow access to the right person 
    - If you own the repo and you can prove GitHub will hold that key for you 

## Learning Guideline 
- A link to the recommended path for ZTM courses 

## Web Developer Monthly 
- A link to the ZTM monthly newsletter and the Machine Learning and Python Monthly newsletters 

## Let's Have Some Fun 
- Resources 
  - ZTM Cheatsheets 
  - ZTM Blog 
  - ZTM YouTube Channel 
  - ZTM Monthly Newsletter 