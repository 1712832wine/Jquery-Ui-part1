$(document).ready(
    function() {
        //DIALOG
        $('#my-dialog').dialog({
            autoOpen: false,
            show: {
                effect: 'blind',
                duration: 1000,
            },
            hide: {
                effect: 'explode',
                duration: 1000,
            },
            modal: true,
            buttons: {
                "Đồng ý": function() {
                    $(this).dialog("close");

                },
                "Thoát": function() {
                    $(this).dialog("close");
                }
            }
        })
        $('#open-dialog').click(function() { $('#my-dialog').dialog('open') });
        //PROGRESSBAR
        $('#my-pro').progressbar({
            value: false,
            change: function() {
                var c_value = $('#my-pro').progressbar('value')
                $('#value').html(c_value + "%")
            },
            complete: function() {
                $('#value').html('Đã xong')
            }
        });


        function Progress() {
            c_value = $('#my-pro').progressbar('value') + 1
            $('#my-pro').progressbar('value', c_value)
            if (c_value < 100) {
                setTimeout(Progress, 1000);
            }
        }
        $('#start-progressbar').click(Progress);
        //DATEPICKER
        $('#datepicker').datepicker();
        //TOOLTIP
        $(document).tooltip({});
        //ACCORDIAN
        $('#acc').accordion({
            heighstyle: 'content',
            collapsible: true

        });
        //AUTOCOMPLETE
        var data = ['Khối A', 'Khối B', 'Khối C'];
        $('#autocomplete').autocomplete({
            delay: 100,
            source: data
        });
        //MENU
        $('#menu').menu();
        //TAB
        $('#tab').tabs();
        //SPINNER
        var a = $('#spinner').spinner();
        $('#spinner-getvalue').click(function() { alert(a.spinner('value')) })
        $('#spinner-setvalue').click(function() {
            if (a.spinner('instance')) a.spinner('destroy')
            else a.spinner()
        })
        $('#spinner-setto0').click(function() { a.spinner('value', 0) });
        //SLIDER
        $('#slider').slider({
            min: 0,
            max: 100,
        });
        //SELECT
        $('#select').select();
        //BUTTON
        $("button").button();
    })