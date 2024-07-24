$(document).ready(function () {

    $('#Rejectbtn').click(function () {
        $('#RejectForm').siblings().css("display", "none")
        $('#RejectForm').css('display', 'block')
        $('#Approvebtn').removeClass('active')
        $('#Rejectbtn').addClass('active')
        $('#Commentbtn').removeClass('active')

    })
    $('#Approvebtn').click(function () {

        $('#ApproveForm').siblings().css("display", "none")
        $('#ApproveForm').css('display', 'block')
        $('#Approvebtn').addClass('active')
        $('#Rejectbtn').removeClass('active')
        $('#Commentbtn').removeClass('active')
    })

    $('#Commentbtn').click(function () {
        $('#CommentForm').siblings().css("display", "none")
        $('#CommentForm').css('display', 'block')
        $('#Commentbtn').addClass('active')
        $('#Rejectbtn').removeClass('active')
        $('#Approvebtn').removeClass('active')
        $('#AssignToDepartmentbtn').removeClass('active')
    })
    $('#AssignToDepartmentbtn').click(function () {
        $('#AssignToDepartmentForm').siblings().css("display", "none")
        $('#AssignToDepartmentForm').css('display', 'block')
        $('#AssignToDepartmentbtn').addClass('active')
        $('#Commentbtn').removeClass('active')
        $('#Rejectbtn').removeClass('active')
        $('#Approvebtn').removeClass('active')
    })

    $(".CustomTable_1").DataTable({
        /* If less than one page hide pagination */
        fnDrawCallback: function () {
            if ($("#DataTables_Table_0_paginate span a.paginate_button").length <= 1) {
                $("#DataTables_Table_0_paginate")[0].style.display = "none";
            } else {
                $("#DataTables_Table_0_paginate")[0].style.display = "block";
            }
        },
        searching: false,
        pageLength: 15,
        lengthChange: false,
        paging: true,
        info: false,
        dom: "Bfrtip",
        ordering: false,
        pagingType: "full_numbers",
        responsive: true,
        language: {
            decimal: "",
            emptyTable: "No data available in table",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            infoEmpty: "Showing 0 to 0 of 0 entries",
            infoFiltered: "(filtered from _MAX_ total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Show _MENU_ entries",
            loadingRecords: "Loading...",
            processing: "Processing...",
            search: "Search:",
            zeroRecords: "No matching records found",
            paginate: {
                first: "First",
                last: "Last",
                next: "Next",
                previous: "Previous",
            },
            aria: {
                sortAscending: ": activate to sort column ascending",
                sortDescending: ": activate to sort column descending",
            },
        },
        data: null,
        render: function (data, type, row) {
            return '<a href="http://127.0.0.1:5502/02.home.my.drones.en.html" target="_blank">User Project Edit Page</a>';
        },
        buttons: [{
            extend: "print",
            text: "Print current page",
            exportOptions: {
                modifier: {
                    page: "current",
                },
            },
        },],
    });


    $(".Click_Table").on("click", "tbody tr", function () {
        window.location.href = $(this).data("href");
    });

    if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        if (document.getElementsByClassName("CustomTable_1")[0] != undefined) {
            $theaders = document.getElementsByClassName("CustomTable_1")[0]
                .children[0].children[0].children;
            headers_to_add = [];
            for (let index = 0; index < $theaders.length; index++) {
                console.log($theaders[index].innerText);
                if (index != 0 && index != $theaders.length - 1) {
                    headers_to_add.push($theaders[index].innerText);
                }
            }

            body_row = document.getElementsByClassName("CustomTable_1")[0].children[1]
                .children;

            for (let i = 0; i < body_row.length; i++) {
                for (let j = 0; j < body_row[i].childElementCount; j++) {
                    if (j != 0 && j != body_row[i].childElementCount - 1) {
                        body_row[i].children[j].insertAdjacentHTML(
                            "afterbegin",
                            '<span class="mobile_th">' + headers_to_add[j - 1] + "</span> : "
                        );
                    }
                }
            }
        }
    }

    $("#resultsBox").find("li").click(function () {

        $(this).toggleClass("active");
    });

    $('.multiple-items').slick({
        infinite: false,

        speed: 300,

        slidesToShow: 6,

        slidesToScroll: 4,

        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $("#resultsBox").find("li").click(function () {

        $(this).toggleClass("active");
    });

    $('.multiple-items').slick({
        infinite: false,

        speed: 300,

        slidesToShow: 6,

        slidesToScroll: 4,

        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

/* Upload file or image */
function addFile(props) {
    let index = props.split("_")[1];
    let file = document.getElementById(props).files[0];
    // let image_url
    if (file) {
        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = '../libraries/pdf.worker/pdf.worker.js';
        document.getElementById("add-button_" + index).classList.add("vis-hidden");

        console.log('file.type = ' + file.type)
        if (file["type"].split("/")[0] === "image") {
            var image_url = URL.createObjectURL(file);
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        } else if (file.type == "application/pdf") {
            var fileReader = new FileReader();
            fileReader.onload = function () {
                var pdfData = new Uint8Array(this.result);
                // Using DocumentInitParameters object to load binary data.
                var loadingTask = pdfjsLib.getDocument({
                    data: pdfData
                });
                loadingTask.promise.then(function (pdf) {
                    console.log('PDF loaded');
                    // Fetch the first page
                    var pageNumber = 1;
                    pdf.getPage(pageNumber).then(function (page) {
                        console.log('Page loaded');

                        var scale = 1.5;
                        var viewport = page.getViewport({
                            scale: scale
                        });

                        // Prepare canvas using PDF page dimensions
                        // var canvas = $("#pdf_upload_viewer_" + index)[0];
                        // delete_button_element = 
                        // canvas.insertAdjacentHTML('beforeBegin', '<div class="delete-img-wrapper"><button onclick="deleteFile(this)" type="button" class="btn btn-danger" tabindex="' + 0 + '"></button></div>');
                        // console.log("#pdf_upload_viewer_" + index)
                        // console.log($("#pdf_upload_viewer_" + index)[0])

                        canvas = `<canvas class="pdf_upload_viewer" id="pdf_upload_viewer_` + index + `"></canvas>`
                        $(".upload_file_" + index)[0].innerHTML =
                            '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                            canvas +
                            '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                            0 +
                            '">Remove</button>' +
                            "</div>";
                        $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
                        //Note to self, almost done, canvas picking after third try,  idk why thank you
                        canvas = $("#pdf_upload_viewer_" + index)[0];
                        imgBase64 = canvas.toDataURL("image/png");
                        var image_url = imgBase64;
                        console.log(imgBase64)

                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);
                        renderTask.promise.then(function () {
                            console.log('Page rendered');
                            // console.log(imgBase64)
                        });
                    });
                }, function (reason) {
                    // PDF loading error
                    console.error(reason);
                });
            };
            fileReader.readAsArrayBuffer(file);
        } else {
            var image_url = "../images/file-shape-blue-bg.png";
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        }
    }


    file_name = $("#" + props)
        .val()
        .split("\\")
        .pop();
    file_name_element = document.createElement("p");
    text_node = document.createTextNode(file_name);
    file_name_element.appendChild(text_node);
    $(".label_file_name_" + index)[0].append(file_name_element);
}

/* Delete file or image */
function deleteFile(props) {
    uploaded_file_id = props.parentElement.parentElement.classList[1];
    let index = uploaded_file_id.split("_")[2];
    file_id = "file_" + index;

    file_element = document.getElementById(file_id);
    if (file_element.files[0].type == 'application/pdf') {
        let canvas = document.getElementById('pdf_upload_viewer_' + index);
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    $('#modalSavebtn').removeClass('sucf').addClass('nsucf')
    props.parentElement.remove();
    document.getElementById("add-button_" + index).classList.remove("d-none");
    $("#" + file_id).val(null);
    $(".label_file_name_" + file_id.split("_")[1])[0].innerHTML = "";
    document.getElementById("add-button_" + index).classList.remove("vis-hidden");

}

function addFilee(props) {
    let index = props.split("_")[1];
    let file = document.getElementById(props).files[0];
    // let image_url
    if (file) {
        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = '../libraries/pdf.worker/pdf.worker.js';
        document.getElementById("add-button_" + index).classList.add("vis-hidden");

        console.log('file.type = ' + file.type)
        if (file["type"].split("/")[0] === "image") {
            var image_url = URL.createObjectURL(file);
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        } else if (file.type == "application/pdf") {
            var fileReader = new FileReader();
            fileReader.onload = function () {
                var pdfData = new Uint8Array(this.result);
                // Using DocumentInitParameters object to load binary data.
                var loadingTask = pdfjsLib.getDocument({
                    data: pdfData
                });
                loadingTask.promise.then(function (pdf) {
                    console.log('PDF loaded');
                    // Fetch the first page
                    var pageNumber = 1;
                    pdf.getPage(pageNumber).then(function (page) {
                        console.log('Page loaded');

                        var scale = 1.5;
                        var viewport = page.getViewport({
                            scale: scale
                        });

                        // Prepare canvas using PDF page dimensions
                        // var canvas = $("#pdf_upload_viewer_" + index)[0];
                        // delete_button_element = 
                        // canvas.insertAdjacentHTML('beforeBegin', '<div class="delete-img-wrapper"><button onclick="deleteFile(this)" type="button" class="btn btn-danger" tabindex="' + 0 + '"></button></div>');
                        // console.log("#pdf_upload_viewer_" + index)
                        // console.log($("#pdf_upload_viewer_" + index)[0])

                        canvas = `<canvas class="pdf_upload_viewer" id="pdf_upload_viewer_` + index + `"></canvas>`
                        $(".upload_file_" + index)[0].innerHTML =
                            '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                            canvas +
                            '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud" tabindex="' +
                            0 +
                            '">Remove</button>' +
                            "</div>";
                        $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
                        //Note to self, almost done, canvas picking after third try,  idk why thank you
                        canvas = $("#pdf_upload_viewer_" + index)[0];
                        imgBase64 = canvas.toDataURL("image/png");
                        var image_url = imgBase64;
                        console.log(imgBase64)

                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);
                        renderTask.promise.then(function () {
                            console.log('Page rendered');
                            // console.log(imgBase64)
                        });
                    });
                }, function (reason) {
                    // PDF loading error
                    console.error(reason);
                });
            };
            fileReader.readAsArrayBuffer(file);
        } else {
            var image_url = "../images/file-shape-blue-bg.png";
            $(".upload_file_" + index)[0].innerHTML =
                '<div class="file-uploaded img-uploaded delete-img-wrapper" style="width: 100%; display: inline-block;">' +
                '<img src="' +
                image_url +
                '">' +
                '<button onclick="deleteFile(this)" type="button" class="btn btn-danger deltbtnud"  tabindex="' +
                0 +
                '">Remove</button>' +
                "</div>";
            $('#modalSavebtn').removeClass('nsucf').addClass('sucf')
        }
    }


    file_name = $("#" + props)
        .val()
        .split("\\")
        .pop();
    file_name_element = document.createElement("p");
    text_node = document.createTextNode(file_name);
    file_name_element.appendChild(text_node);
    $(".label_file_name_" + index)[0].append(file_name_element);
}

$(document).ready(function () {


    //group add limit
    var maxGroup = 7;
    //add more fields group
    $(".addMore").click(function () {

        if ($('body').find('.fieldGroup').length < maxGroup) {
            var fieldHTML = '<div class="row fieldGroup">' + $(".fieldGroupCopy").html() + '</div>';
            $('body').find('.fieldGroup:last').after(fieldHTML);
        } else {
            alert('Maximum ' + maxGroup + ' groups are allowed.');
        }
    });

    //remove fields group
    $("body").on("click", ".remove", function () {
        $(this).parents(".fieldGroup").remove();
    });
});
//------------------------------------------------------------------//
function searchFilterChange() {
    let allCollection = document.querySelectorAll("[data-option='true']");
    for (let i = 0; i < allCollection.length; i++) {
        allCollection[i].style.display = 'none';
        allCollection[i].setAttribute("disabled", true)
    }
    let collection = document.querySelectorAll("[data-filter='" + document.getElementById('filterSelect').value + "']");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'block';
        collection[i].removeAttribute("disabled")
    }
    document.getElementById('valueSelect').value = '';
}

function otpvalue(props) {
    alert(document.getElementById(`${props}`).value)
}

function RegCompany(id) {
    let NafathCompany = document.getElementById('RegCompany_')
    if (document.getElementById(id).checked == true) {
        NafathCompany.removeAttribute('disabled', '');
    } else {
        NafathCompany.setAttribute('disabled', '');
        NafathCompany.value = '';
    }
}

const NafathComapny = (id) => {
    let NafathCompany = document.getElementById('NafathCompany_')
    if (document.getElementById(id).checked == true) {

        NafathCompany.removeAttribute('disabled', '');
    } else {

        NafathCompany.setAttribute('disabled', '');
        NafathCompany.value = '';

    }
}


/**
* Create an arrow function that will be called when an image is selected.
*/
const previewImage = (event) => {
    /**
     * Get the selected files.
     */
    const imageFiles = event.target.files;
    /**
     * Count the number of files selected.
     */
    const imageFilesLength = imageFiles.length;
    /**
     * If at least one image is selected, then proceed to display the preview.
     */
    if (imageFilesLength > 0) {
        /**
         * Get the image path.
         */
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        /**
         * Select the image preview element.
         */
        const imagePreviewElement = document.querySelector("#preview-selected-image");
        /**
         * Assign the path to the image preview element.
         */
        imagePreviewElement.src = imageSrc;
        /**
         * Show the element by changing the display value to "block".
         */
        imagePreviewElement.style.display = "block";
    }
};

function NP_toggle() {
    $('#feesBlock').slideToggle("slow");
    if (document.getElementById("needPayment").checked) {
        document.getElementById("fees").setAttribute('required', '');
        document.getElementById("serviceCode").setAttribute('required', '');
        document.getElementById("serviceCategory").setAttribute('required', '');
    } else {
        document.getElementById("fees").removeAttribute('required');
        document.getElementById("serviceCode").removeAttribute('required');
        document.getElementById("serviceCategory").removeAttribute('required');
    }
    document.getElementById("fees").value = "";
    document.getElementById("serviceCode").value = "";
    document.getElementById("serviceCategory").value = "";
}
function ES_toggle() {
    $('#externalBlock').slideToggle("slow");
    if (document.getElementById("externalEService").checked) {
        document.getElementById("externalUrl").setAttribute('required', '');
    } else {
        document.getElementById("externalUrl").removeAttribute('required');
    }
    document.getElementById("externalUrl").value = "";
}
function IS_toggle() {
    $('#internalBlock').slideToggle("slow");
    if (document.getElementById("internalEService").checked) {
        document.getElementById("internalUrl").setAttribute('required', '');
    } else {
        document.getElementById("internalUrl").removeAttribute('required');
    }
    document.getElementById("internalUrl").value = "";
}
function uploadFile(rowNumber) {
    const textElement = document.getElementById(`text${rowNumber}`);
    const fileNameElement = document.getElementById(`fileName${rowNumber}`);
    const fileInput = document.getElementById(`fileInput${rowNumber}`);
    const attachButton = document.querySelector(`#fileInput${rowNumber} + button`);
    const removeButton = document.querySelector(`#fileInput${rowNumber} + button + button`);
    fileInput.addEventListener('change', () => {

        attachButton.classList.add('hidden');
        removeButton.classList.remove('hidden');
        const fileName = fileInput.value.split('\\').pop(); // Get the file name
        fileNameElement.textContent = fileName;
    });
    fileInput.click();
}
function removeFile(rowNumber) {
    const textElement = document.getElementById(`text${rowNumber}`);
    const fileNameElement = document.getElementById(`fileName${rowNumber}`);
    const fileInput = document.getElementById(`fileInput${rowNumber}`);
    const attachButton = document.querySelector(`#fileInput${rowNumber} + button`);
    const removeButton = document.querySelector(`#fileInput${rowNumber} + button + button`);
    textElement.classList.remove('green-text');
    attachButton.classList.remove('hidden');
    removeButton.classList.add('hidden');
    fileNameElement.textContent = ''; // Clear the file name
    fileInput.value = '';
}

function resetTags() {
	document.getElementById("allSpecialities").checked = true;
    var items = document.getElementsByClassName('eserviceItem');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.style.display = 'block';
    }
};

function changeTag(currentTag) {
    if (document.getElementById(currentTag).checked) {
        var items = document.getElementsByClassName('eserviceItem');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            if (item.getAttribute("data-tag").includes("#" + currentTag + "#")) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }
};
function changeAllTag(currentTag) {
    if (document.getElementById(currentTag).checked) {
        var items = document.getElementsByClassName('eserviceItem');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.style.display = 'block';
        }
    }
};

function handleFileSelection(event, type, count, acceptedFormat) {
    document.getElementById('fileInput' + type).id = 'fileInput' + type + count;
    document.getElementById('fileInput' + type + count).setAttribute('name', 'fileInput' + type + count);
    count++;
    var fileInput = event.target;
    var fileName = fileInput.files[0].name;
    var fileRow = document.createElement('div');
    fileRow.classList.add('file-row-attach', 'docouterbox', 'mb-1');
    var fileNameDiv = document.createElement('div');
    fileNameDiv.classList.add('showFileName');
    fileNameDiv.innerHTML = fileName;
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('removebtn')
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'Remove';
    deleteButton.onclick = function () {
        fileInput.parentNode.removeChild(fileInput);
        fileRow.parentNode.removeChild(fileRow);
        document.getElementById('fileInput' + type).removeAttribute('disabled');
    };
    fileRow.appendChild(fileNameDiv);
    fileRow.appendChild(deleteButton);
    document.getElementById('fileContainer' + type).appendChild(fileRow);

    var inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.style = 'visibility:hidden;';
    inputFile.name = 'fileInput' + type;
    inputFile.id = 'fileInput' + type;
    inputFile.setAttribute("onchange", "handleFileSelection(event,'" + type + "'," + count +  ",'"+ acceptedFormat + "')");
    inputFile.setAttribute("accept", acceptedFormat);
    if(document.getElementById('fileInputContainer' + type).getElementsByTagName('input').length == 5){
    	inputFile.setAttribute('disabled','');
    }
    document.getElementById('fileInputContainer' + type).appendChild(inputFile);

};

function addRelatedEService(btnLabel) {

    var selectService = document.getElementById('eserviceId');
    var servicesList = document.getElementById('servicesList');
    var value = selectService.options[selectService.selectedIndex].value;
    var text = selectService.options[selectService.selectedIndex].text;
    var existingDiv = document.getElementById(value);

    if (value && !existingDiv) {
        var divRow = document.createElement('div');
        divRow.classList.add('row', 'mt-2');
        divRow.setAttribute("id", value);
        var divText = document.createElement('div');
        divText.classList.add('col-md-10');
        divText.innerHTML = text;
        var divBtn = document.createElement('div');
        divBtn.classList.add('col-md-2');
        var btn = document.createElement('button');
        btn.classList.add('removebtn');
        btn.innerHTML = btnLabel;
        btn.onclick = function () {
            divRow.parentNode.removeChild(divRow);
        };
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'relatedEServices';
        input.value = value;

        divBtn.appendChild(btn);
        divRow.appendChild(divText);
        divRow.appendChild(divBtn);
        divRow.appendChild(input);
        servicesList.appendChild(divRow);
        selectService.value = '';
    } else {
        selectService.focus();
    }
};

function addRequiredForm(btnLabel, mandatoryLabel, optionalLabel) {

    var selectForm = document.getElementById('formId');
    var formsList = document.getElementById('formsList');
    var value = selectForm.options[selectForm.selectedIndex].value;
    var text = selectForm.options[selectForm.selectedIndex].text;
    var mandatory = document.querySelector("input[type='radio'][name=mandatoryForm]:checked").value;
    var existingDiv = document.getElementById(value);

    if (value && mandatory && !existingDiv) {
        var divRow = document.createElement('div');
        divRow.classList.add('row', 'mt-2');
        divRow.setAttribute("id", value);

        var divText = document.createElement('div');
        divText.classList.add('col-md-8');
        divText.innerHTML = text;

        var divMandatory = document.createElement('div');
        divMandatory.classList.add('col-md-2');
        if (mandatory == 'mandatory') {
            divMandatory.innerHTML = mandatoryLabel;
            divMandatory.classList.add('Mandatory');
        } else {
            divMandatory.innerHTML = optionalLabel;
            divMandatory.classList.add('Optional');
        }

        var divBtn = document.createElement('div');
        divBtn.classList.add('col-md-2');
        var btn = document.createElement('button');
        btn.classList.add('removebtn');
        btn.innerHTML = btnLabel;
        btn.onclick = function () {
            divRow.parentNode.removeChild(divRow);
        };

        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'forms[' + value + ']';
        input.value = (mandatory != 'mandatory');

        divBtn.appendChild(btn);
        divRow.appendChild(divText);
        divRow.appendChild(divMandatory);
        divRow.appendChild(divBtn);
        divRow.appendChild(input);
        formsList.appendChild(divRow);
        selectForm.value = '';
    } else {
        selectForm.focus();
    }
};

function addRequiredDocument(btnLabel, mandatoryLabel, optionalLabel) {

    var selectDocument = document.getElementById('documentId');
    var documentsList = document.getElementById('documentsList');
    var value = selectDocument.options[selectDocument.selectedIndex].value;
    var text = selectDocument.options[selectDocument.selectedIndex].text;
    var mandatory = document.querySelector("input[type='radio'][name=mandatoryDocument]:checked").value;
    var existingDiv = document.getElementById(value);

    if (value && mandatory && !existingDiv) {
        var divRow = document.createElement('div');
        divRow.classList.add('row', 'mt-2');
        divRow.setAttribute("id", value);

        var divText = document.createElement('div');
        divText.classList.add('col-md-8');
        divText.innerHTML = text;

        var divMandatory = document.createElement('div');
        divMandatory.classList.add('col-md-2');
        if (mandatory == 'mandatory') {
            divMandatory.innerHTML = mandatoryLabel;
            divMandatory.classList.add('Mandatory');
        } else {
            divMandatory.innerHTML = optionalLabel;
            divMandatory.classList.add('Optional');
        }

        var divBtn = document.createElement('div');
        divBtn.classList.add('col-md-2');
        var btn = document.createElement('button');
        btn.classList.add('removebtn');
        btn.innerHTML = btnLabel;
        btn.onclick = function () {
            divRow.parentNode.removeChild(divRow);
        };

        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'documents[' + value + ']';
        input.value = (mandatory != 'mandatory');

        divBtn.appendChild(btn);
        divRow.appendChild(divText);
        divRow.appendChild(divMandatory);
        divRow.appendChild(divBtn);
        divRow.appendChild(input);
        documentsList.appendChild(divRow);
        selectDocument.value = '';
    } else {
        selectDocument.focus();
    }
};

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function changeMainCategory(selectId) {
    var selectedOption = $(selectId).val();
	var allOptions = $("option[data-type='subCategory']");
    var visibleOptions = $("option[data-parent='" + selectedOption + "']");
    if (visibleOptions.length > 0) {
        $('#divSubCategory').show();
        allOptions.hide();
        visibleOptions.show();
		$('#subCategorySelect').val("");
		$('#subCategorySelect').attr('required',true);
    } else {
        $('#divSubCategory').hide();
		$('#subCategorySelect').val("");
		$('#subCategorySelect').removeAttr('required');
    }
	
}

function changeCategory(selectId) {
    var selectedOption = $(selectId).val();
	var allOptions = $("option[data-type='mainCategory']");
    var visibleOptions = $("option[data-parent='" + selectedOption + "']");
	
    allOptions.hide();
    visibleOptions.show();
	
	$('#mainCategorySelect').val("");
	$('#divSubCategory').hide();
	$('#subCategorySelect').val("");
	$('#subCategorySelect').removeAttr('required');
}

function changeAirport(selectId) {
    var selectedOption = $(selectId).val();
	var allOptions = $("option[data-type='terminal']");
    var visibleOptions = $("option[data-parent='" + selectedOption + "']");
	
    allOptions.hide();
    visibleOptions.show();
	
	$('#terminalSelect').val("");
}

function doLogin(keyInput) {
	var data = document.getElementById('password').value;
    var key  = CryptoJS.enc.Latin1.parse(keyInput);
    var iv   = CryptoJS.enc.Latin1.parse(keyInput);  
    var encrypted = CryptoJS.AES.encrypt(
      data,
      key,
      {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding
    });
    document.getElementById('password').value = encrypted + keyInput; 
    return true;
  }

function credentialsFo(params, keyInput) {
	for (i=0; i<params.length; i++) {
	    var data = document.getElementById(params[i]).value;
	    var key  = CryptoJS.enc.Latin1.parse(keyInput);
	    var iv   = CryptoJS.enc.Latin1.parse(keyInput);  
	    var encrypted = CryptoJS.AES.encrypt(
	      data,
	      key,
	      {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding
	    });
	    document.getElementById(params[i]).value = encrypted + keyInput;
	}
    return true;
  }

function updateAirline(event){
	var selectElement = event.target;
	var code = selectElement.options[selectElement.selectedIndex].getAttribute('data-code');
	document.getElementById('flightNumberPrefix').textContent=code;
}

function changeCitizenOrResident(currentField) {

	if (document.getElementById(currentField).value === "true"){
		for (let i = 0; i < document.getElementsByClassName("nationalUserDetails").length; i++) {
			document.getElementsByClassName("nationalUserDetails")[i].style.display = 'flex';
		}
		for (let i = 0; i < document.getElementsByClassName("nationalUserInputs").length; i++) {
			document.getElementsByClassName("nationalUserInputs")[i].disabled = false;
		}
		for (let i = 0; i < document.getElementsByClassName("foreignerUserDetails").length; i++) {
			document.getElementsByClassName("foreignerUserDetails")[i].style.display = 'none';
		}
		for (let i = 0; i < document.getElementsByClassName("foreignerUserInputs").length; i++) {
			document.getElementsByClassName("foreignerUserInputs")[i].disabled = true;
		}
	} else {
		for (let i = 0; i < document.getElementsByClassName("nationalUserDetails").length; i++) {
			document.getElementsByClassName("nationalUserDetails")[i].style.display = 'none';
		}
		for (let i = 0; i < document.getElementsByClassName("nationalUserInputs").length; i++) {
			document.getElementsByClassName("nationalUserInputs")[i].disabled = true;
		}
		for (let i = 0; i < document.getElementsByClassName("foreignerUserDetails").length; i++) {
			document.getElementsByClassName("foreignerUserDetails")[i].style.display = 'flex';
		}
		for (let i = 0; i < document.getElementsByClassName("foreignerUserInputs").length; i++) {
			document.getElementsByClassName("foreignerUserInputs")[i].disabled = false;
		}
		
	}
}

function qpeSurveyQuestion1(questionInput){
	var currentValue = questionInput.value;
	
	if(currentValue <= 3){
		for (let i = 0; i < document.getElementsByClassName("question1Details").length; i++) {
			document.getElementsByClassName("question1Details")[i].style.display = 'block';
		}
		for (let i = 0; i < document.getElementsByClassName("question1Inputs").length; i++) {
			document.getElementsByClassName("question1Inputs")[i].disabled = false;
		}
	} else {
		for (let i = 0; i < document.getElementsByClassName("question1Details").length; i++) {
			document.getElementsByClassName("question1Details")[i].style.display = 'none';
		}
		for (let i = 0; i < document.getElementsByClassName("question1Inputs").length; i++) {
			document.getElementsByClassName("question1Inputs")[i].disabled = true;
		}
	}
}

function qpeSurveyQuestion2(questionInput){
	var currentValue = questionInput.value;
	
	if(currentValue <= 3){
		for (let i = 0; i < document.getElementsByClassName("question2Details").length; i++) {
			document.getElementsByClassName("question2Details")[i].style.display = 'block';
		}
		for (let i = 0; i < document.getElementsByClassName("question2Inputs").length; i++) {
			document.getElementsByClassName("question2Inputs")[i].disabled = false;
		}
	} else {
		for (let i = 0; i < document.getElementsByClassName("question2Details").length; i++) {
			document.getElementsByClassName("question2Details")[i].style.display = 'none';
		}
		for (let i = 0; i < document.getElementsByClassName("question2Inputs").length; i++) {
			document.getElementsByClassName("question2Inputs")[i].disabled = true;
		}
	}
}

/***********************************/
Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            // Get ctx from string
            var ctx = chart.chart.ctx;

            // Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var maxFontSize = centerConfig.maxFontSize || 75;
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            // Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
            var minFontSize = centerConfig.minFontSize;
            var lineHeight = centerConfig.lineHeight || 25;
            var wrapText = false;

            if (minFontSize === undefined) {
                minFontSize = 20;
            }

            if (minFontSize && fontSizeToUse < minFontSize) {
                fontSizeToUse = minFontSize;
                wrapText = true;
            }

            // Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            if (!wrapText) {
                ctx.fillText(txt, centerX, centerY);
                return;
            }

            var words = txt.split(' ');
            var line = '';
            var lines = [];

            // Break words up into multiple lines if necessary
            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > elementWidth && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }

            // Move the center up depending on line height and number of lines
            centerY -= (lines.length / 2) * lineHeight;

            for (var n = 0; n < lines.length; n++) {
                ctx.fillText(lines[n], centerX, centerY);
                centerY += lineHeight;
            }
            //Draw text in center
            ctx.fillText(line, centerX, centerY);
        }
    }
});

function doughnutChart(chartId, partial, total, color) {
    const stat1 = Math.round((partial / total) * 100);
    const stat2 = Math.round(((total - partial) / total) * 100);

    var config = {
        type: 'doughnut',
        holeSize: 23,
        data: {
            labels: [
                "",
                "",
            ],
            datasets: [{
                data: [stat1, stat2],
                pointRadius: 0,
                backgroundColor: [
                    color,
                    "#EDF0F5"
                ],
                hoverBackgroundColor: [
                    color,
                    "#EDF0F5"

                ]
            }]
        },
        options: {
            devicePixelRatio: 1.5,
            cutoutPercentage: 70,
            elements: {
                center: {
                    text: stat1 + '%',
                    color: color,
                    fontStyle: 'Arial',
                    sidePadding: 20,
                    minFontSize: 25,
                    lineHeight: 25,
                }
            },
            legend: {
                display: false
            },
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }

    };


    var ctx = document.getElementById(chartId).getContext("2d");
    var myChart = new Chart(ctx, config);

}

/**************************************************/

function pieChart(chartId, labels, data, backgroundColor) {
    var oilCanvas = document.getElementById(chartId);

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 16;

    var oilData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: backgroundColor
            }],

    };

    var pieChart = new Chart(oilCanvas, {
        type: 'pie',
        data: oilData
    });
}

/**************************************************/

function doughnutChartAdv(chartId, labels, data, backgroundColor) {
    var oilCanvas = document.getElementById(chartId);

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 16;

    var oilData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: backgroundColor
            }],
    };

    var pieChart = new Chart(oilCanvas, {
        type: 'doughnut',
        data: oilData
    });
}



/************************************************/

function barChart(chartId, title, data) {

    var ctx = document.getElementById(chartId).getContext("2d");

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            tooltips: {
                displayColors: true,
                callbacks: {
                    mode: 'x',
                },
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                    },
                    type: 'linear',
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: { position: 'bottom' },
        }
    });

}
