# Generic Target Info: Target VM

IP: 192.168.56.103, found with `nmap 192.168.56.0/24`

## Basic nmap scan report

```bash
# nmap -sS 192.168.56.0/24
Nmap scan report for 192.168.56.103
Host is up (0.00072s latency).
Not shown: 992 filtered ports
PORT     STATE  SERVICE
21/tcp   open   ftp
22/tcp   open   ssh
80/tcp   open   http
445/tcp  open   microsoft-ds
631/tcp  open   ipp
3000/tcp closed ppp
3306/tcp open   mysql
8181/tcp open   intermapper
```

## OS Detection

```bash
# nmap -O 192.168.56.103
Device type: general purpose
Running: Linux 3.X|4.X
OS CPE: cpe:/o:linux:linux_kernel:3 cpe:/o:linux:linux_kernel:4
OS details: Linux 3.2 - 4.9
Network Distance: 1 hop
```

## Version Detection

```bash
# nmap -sSV 192.168.56.103
PORT     STATE  SERVICE     VERSION
21/tcp   open   ftp         ProFTPD 1.3.5
22/tcp   open   ssh         OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.10 (Ubuntu Linux; protocol 2.0)
80/tcp   open   http        Apache httpd 2.4.7
445/tcp  open   netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
631/tcp  open   ipp         CUPS 1.7
3000/tcp closed ppp
3306/tcp open   mysql       MySQL (unauthorized)
8181/tcp open   http        WEBrick httpd 1.3.1 (Ruby 2.3.7 (2018-03-28))
MAC Address: 08:00:27:15:E8:58 (Oracle VirtualBox virtual NIC)
Service Info: Hosts: 127.0.0.1, TARGET; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
```

