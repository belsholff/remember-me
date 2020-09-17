Test if a privacy protocol is set by a webserver
---

```bash
#just tls 1.2 and 1.3 is acceptable as usable these days. Use PORT just if needed.
#1.2
curl -I -v --tlsv1.2 --tls-max 1.2 https://hostname.example.com:[PORT]/
#1.3
curl -I -v --tlsv1.3 --tls-max 1.3 https://hostname.example.com:[PORT]/
```
TLS client
---

``` bash
openssl s_client -host <hostname.example.com> -port <PORT>
```
