Size of a file
---

```bash
#in bytes
ls -l /path/to/file | awk '{ print $5 }'

#in kilobytes
du -s /path/to/file | awk '{ print $1 }'

#in KB, MB, GB (human headable - binary base)
ls -lh /path/to/file | awk '{ print $5 }'
#OR
du -hs /path/to/file | awk '{ print $1 }'

#in KB, MB, GB (human headable - decimal base)
du --si /path/to/file | awk '{ print $1 }'
```

Size of a directory
---

```bash
#in kilobytes
du -s /path/to/file | awk '{ print $1 }'

#in KB, MB, GB (human headable - binary base)
du -hs /path/to/file | awk '{ print $1 }'

#in KB, MB, GB (human headable - decimal base)
du --si /path/to/file | awk '{ print $1 }'
```

Passing a list of files/directories before awk pipe will list them too.

Using `*` as shown in `/path/to/directory/*` will list folder's contents.

Sum of files/directories sizes
---

```bash
#in kilobytes
du -s /path/to/dir1 /path/to/file1/ /path/to/someone/else | awk '{ sum += $1 } END { print sum }'

#in KB, MB, GB (human headable - binary base)
du -s /path/to/dir1 /path/to/file1/ /path/to/someone/else | awk '{ sum += $1 } END { print sum*1024 }' | numfmt --to=iec-i --suffix=B --format="%.3f"
```
Sort by size
---

```bash
# high -> low
ls -lhaS /path/to/targets/
#OR
du -hs /path/to/targets/ | sort -rh

# low -> high
ls -lharS /path/to/targets/
du -hs /path/to/targets/ | sort -h
```

If you want this without human headable mode, remove `h` option and add option `n` to sort commands when use command line containing it. 
