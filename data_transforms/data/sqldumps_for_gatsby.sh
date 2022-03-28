#!/bin/bash
i=1
until [ $i -gt 1476 ]
do
	title=$(sudo mysql -u root humanism_humism -N -e "select post_title from hfst_posts where ID = $i and post_status = 'publish'")
	if [ -n "$title" ]; then
		echo "---" >> post_$i.md
		echo 'title: "'$title'"' >> post_$i.md
		echo "path: /text/$i" >> post_$i.md
		echo "---" >> post_$i.md
		sudo mysql -u root humanism_humism -N -e "select post_content from hfst_posts where ID = $i" >> post_$i.md
		echo $i $title >> titles.txt
	fi
	((i=i+1))
done
