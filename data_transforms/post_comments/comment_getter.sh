#!/bin/bash
postNos=(1 100 102 104 106 108 110 112 115 117 122 124 126 134 138 142 144 146 149 153 155 157 160 163 166 169 171 173 176 178 18 180 189 191 194 197 199 2 201 204 207 209 211 213 215 217 219 221 223 225 227 229 231 233 235 237 24 240 244 246 248 250 252 254 256 258 26 260 262 264 266 268 270 272 274 276 278 28 280 282 284 286 288 290 292 294 296 298 300 302 305 307 309 31 311 313 315 317 319 321 323 325 327 329 33 331 333 335 337 339 341 343 345 347 349 35 351 353 355 357 359 361 363 365 367 369 37 371 373 375 377 379 381 383 385 387 388 39 390 392 394 396 398 4 400 402 41 43 5 6 79 84 86 88 90 92 94 96 98)

count=0
for i in "${postNos[@]}"
do
    id=$(sudo mysql -u root humanism_humism -N -e "select comment_id from hfst_comments where comment_post_id = $i")
    for c in $id
    do
        filename="post_${i}_comment_${c}.md" 
        echo "---" >> $filename
        echo 'id: "'$c'"' >> $filename
        echo 'post_id: "'$i'"' >> $filename
        cauthor=$(sudo mysql -u root humanism_humism -N -e "select comment_author from hfst_comments where comment_id = $c and comment_approved = 1")
        echo 'author: "'$cauthor'"' >> $filename
        cdate=$(sudo mysql -u root humanism_humism -N -e "select comment_date from hfst_comments where comment_id = $c and comment_approved = 1")
        echo 'date: "'$cdate'"' >> $filename
        echo "---" >> $filename
        ccontent=$(sudo mysql -u root humanism_humism -N -e "select comment_content from hfst_comments where comment_id = $c and comment_approved = 1")
        echo $ccontent >> $filename
        $count=$count + 1
        echo $count

    done
   # or do whatever with individual element of the array
done