Database dump
---

```bash
mysqldump -u <db_user> --databases <db_name> -p --tables <table_if_needed> | gzip -9 - > <filename>.sql.gz
```
