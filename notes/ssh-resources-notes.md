# Diffie Hellman Key Exchange Resources 

## Secret Key Exchange (Diffie-Hellman) - Computerphile 
- Diffie Hellman was published in 1976
- It is mathematically complex, but is used all the time 
- It is slightly mis-named - we don't actually exchange a key 
  - We exchange public variables and combine them with some public variables we've kept hidden so that we can both create the same key 
- Come back to this to see the visual example provided 
- Once we combine the public to private - we can't unmix them 
- Mathematically nothing in the public area can be combined in any way to get the private values, you need to know what a and b are and to do that is to split up one of the two public components which is really difficult to do  

## Diffie Hellman -the Mathematics bit- Computerphile
- If we don't care about the math, there is a non-math version of this video 
- The methematics behind Diffie Hellman is usually Modulo-Arithmetic 
  - G and N 
    - G is often small 
    - N is often 4,000 bits now 
- Alice picks A and Bob picks B - these are the ones they will keep private 
  - Alice calculates G^amod^n
    - This is in a circular pattern, like a clock face 
    - You would have to brute force it to find what a is 
  - Bob calculates G^bmod^n
  - Together this creates 
    - g^abmod^n
- To reverse this process we have to know what a or b is 
- N has to be big because it takes longer to find the values - it is technically possible, but takes a very long time to actually figure out 

## Key Exchange Problems - Computerphile
- Man in the middle attacks 
  - This is a real problem for Diffie Hellman when it's used on it's own this is where we bring in RSA or public key encryption to help us 
  - Alice produces her private key, but Sean is sitting in the middle and intercepts it and establishes his own shared secret with Alice and then in turn knows that Alice was trying to communicate with Bob, so he pretends to be Alice and establishes a connection with Bob 
  - He calculates two different keys and can see everything being sent 
    - Every time a message is sent it can be encrypted - decrypted in the middle - re-encrypted in the middle and then sent to the target 
- RSA or DSA 
  - We want to ensure no one is sitting in the middle and then we want the other computer to verify this is actually the person we are trying to reach 
  - Performs signature verification 
  - This assumes the private key hasn't been given away 
  - This is a fundamental protocol used with VPN's or TLS handshake 
- If we have RSA why do we use Diffie Hellman? 
  - Technically we could just use RSA, we run into the perfect forward secrecy 
  - If anyone breaks the RSA key, someone can decrypt everything 
  - RSA is established over a long period of time
  - We use the two together to have Diffie Hellman generate the access key or secret and then RSA to authenticate 
  - We don't use RSA for long term encryption because it is too slow for a whole message 

## Elliptic Curves - Computerphile
- The mathematics behind Diffie Hellman does is allow the protocol to send messages where you can;t extract this private variable and that's exactly what elliptic curves do, they just do it in a slightly different way 
- Elliptic curves are curves in different dimensions 
  - We have a cycle of points on our curve 
  - See video for the difference between 2g and 3g and how to get them on the graph and tangents 
- What do elliptic curves do? 
  - A plug in replacement for the mathematics that a modular arithmetic mathematics involved in normal Diffie Hellman 
- Even though it looks more complicated, mathematically it is more efficient 
  - Elliptic curves are harder to solve 
  - This is a discrete logarithm problem is harder to solve than a regular discrete logging problem 

# SSH Into A Server 
- SSH appeared in the mid-90's as a sort of replacement for/way of connecting to a remote machine over the internet 
  - Back in the day the technologies you had to conenct to a remote machine were fine (Telnet, rlogin, RSH), but they transmitted all the data in the clear over the network 
  - Anyone with a packet sniffer on the remote machine could see in there 
  - SSH was created so that you couldn't see what the data was, but you could do some analysis 
- When you SSH, you set a TCP connection (could be any time of connection like websockets), then the SSH breaks the data down into a series of packets 
  - Packet 
    - Packets - length 
    - padding - amount 
    - payload 
    - padding - random bytes (enforce the encryption)
    - message authentication code 
  - You can compress the payload, then the whole of the packet is encrypted 
  - Then this is reversed to decrypt the data 
- You then open a series of channels that you send the data over 
- Conencts to the remote machine, then it sends back what it accepts which version of SSH and then once information about compatability is exchanged, we check that we know the machine and then we authenticate 
- You can keep a connection alive beyond when you've just disconnected from the shell so they can reuse that TCP cpnnection 
  - The lower level bits, when you create a new connection on top 