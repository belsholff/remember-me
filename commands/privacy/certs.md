Generate host certificate to buy a verified CA's certificate
---

```bash
# nodes: without passphrase; rsa:2048 crypto and length; keyout: private key; out: cert request public key
openssl req -newkey rsa:2048 -nodes -keyout /etc/pki/tls/private/<domain>_<port>.key  -out /etc/pki/tls/certs/<domain>_<port>.csr
```

Generate self-assigned cert
---

```bash
# x509: self-assigned; days: validity; out: public key to browsers
openssl req -x509 -nodes -days <nDays> -newkey rsa:2048 -keyout /etc/pki/tls/private/<domain>_<port>.key -out /etc/pki/tls/certs/<domain>_<port>.crt
```

Get full certificate chain
---

```bash
openssl s_client -showcerts -host <hostname.exmaple.com> -port <PORT> </dev/null
```

Check if a subdomain is covered by a certificate served
---

```bash
openssl s_client -verify_hostname <www.example.com> -connect <example.com:443> # verify_hostname: hostname to be checked; connect: hostname from cert
```
