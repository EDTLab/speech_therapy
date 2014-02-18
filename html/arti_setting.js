function changeImage(category, element) {
    var n,
		cate_no;

	switch (category) {
    case 1:
        cate_no = 19;
        break;
    case 2:
        cate_no = 3;
        break;
    case 3:
        cate_no = 2;
        break;
    case 4:
        cate_no = 4;
        break;
    case 5:
        cate_no = 2;
        break;
	}

	for (n = 1; n <= cate_no; n = n + 1) {
		document.getElementById('arti_settingBtn' + category + '_' + n).style.background = 'url(img/3_arti/settingBtns/settingBtn_'+[category]+'_'+[n]+'.jpg) no-repeat center center';
	}
	document.getElementById('arti_settingBtn' + category + '_' + element).style.background = 'url(img/3_arti/settingBtns/settingBtn_selected_'+[category]+'_'+[element]+'.jpg) no-repeat center center';
    return;
}