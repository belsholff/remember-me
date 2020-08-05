Generate passwords without punctuation/symbols
---

Good for long database passwords;

```bash
openssl rand -base64 1000 | tr -dc [:alnum:] | head -c <desired_length>
#OR
cat /dev/urandom | tr -dc [:alnum:] | head -c <desired_length>

```

- To automatically pass it to clipboard, use `xclip`. Look an example:

```bash
openssl rand -base64 1000 | tr -dc [:alnum:] | head -c 32 | xclip -sel clip
#OR
cat /dev/urandom | tr -dc [:alnum:] | head -c 32 | xclip -sel clip
```

Generate passwords with punctuation/symbols
---

```bash
cat /dev/urandom | tr -dc [:alnum:][:punct:] | head -c <desired_length>
```

To clipboard, proceed as shown above.
