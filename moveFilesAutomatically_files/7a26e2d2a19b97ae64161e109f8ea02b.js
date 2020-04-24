document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist95150103\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-stock_input_creation-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>from<\/span> <span class=pl-s1>sklearn<\/span>.<span class=pl-s1>preprocessing<\/span> <span class=pl-k>import<\/span> <span class=pl-v>MinMaxScaler<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>from<\/span> <span class=pl-s1>sklearn<\/span>.<span class=pl-s1>model_selection<\/span> <span class=pl-k>import<\/span> <span class=pl-s1>train_test_split<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>train_cols<\/span> <span class=pl-c1>=<\/span> [<span class=pl-s>&quot;Open&quot;<\/span>,<span class=pl-s>&quot;High&quot;<\/span>,<span class=pl-s>&quot;Low&quot;<\/span>,<span class=pl-s>&quot;Close&quot;<\/span>,<span class=pl-s>&quot;Volume&quot;<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>df_train<\/span>, <span class=pl-s1>df_test<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>train_test_split<\/span>(<span class=pl-s1>df_ge<\/span>, <span class=pl-s1>train_size<\/span><span class=pl-c1>=<\/span><span class=pl-c1>0.8<\/span>, <span class=pl-s1>test_size<\/span><span class=pl-c1>=<\/span><span class=pl-c1>0.2<\/span>, <span class=pl-s1>shuffle<\/span><span class=pl-c1>=<\/span><span class=pl-c1>False<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-en>print<\/span>(<span class=pl-s>&quot;Train and Test size&quot;<\/span>, <span class=pl-en>len<\/span>(<span class=pl-s1>df_train<\/span>), <span class=pl-en>len<\/span>(<span class=pl-s1>df_test<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># scale the feature MinMax, build array<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>x<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>df_train<\/span>.<span class=pl-s1>loc<\/span>[:,<span class=pl-s1>train_cols<\/span>].<span class=pl-s1>values<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>min_max_scaler<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>MinMaxScaler<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>x_train<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>min_max_scaler<\/span>.<span class=pl-en>fit_transform<\/span>(<span class=pl-s1>x<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-stock_input_creation-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-stock_input_creation-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>x_test<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>min_max_scaler<\/span>.<span class=pl-en>transform<\/span>(<span class=pl-s1>df_test<\/span>.<span class=pl-s1>loc<\/span>[:,<span class=pl-s1>train_cols<\/span>])<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DarkKnight1991/7a26e2d2a19b97ae64161e109f8ea02b/raw/8e44ab706e5de1cf01dd5397be394a1347bff79a/stock_input_creation.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DarkKnight1991/7a26e2d2a19b97ae64161e109f8ea02b#file-stock_input_creation-py\">stock_input_creation.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
