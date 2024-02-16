<script type="text/javascript">(function ($) {
        $(document).ready(function () {
            $('#custom_redirect_enabled').on('change', function () {
                if ($(this).is(':checked')) {
                    $('#redirect').css('display', '');
                } else {
                    $('#redirect').css('display', 'none');
                }
            });

            $('#custom_redirect_reg_enabled').on('change', function () {
                if ($(this).is(':checked')) {
                    $('#redirect_reg').css('display', '');
                } else {
                    $('#redirect_reg').css('display', 'none');
                }
            });

            $('#default_redirect_enabled').on('change', function () {
                if ($(this).is(':checked')) {
                    $('#default_redirect').css('display', '');
                } else {
                    $('#default_redirect').css('display', 'none');
                }
            });

            $('#default_redirect_reg_enabled').on('change', function () {
                if ($(this).is(':checked')) {
                    $('#default_redirect_reg').css('display', '');
                } else {
                    $('#default_redirect_reg').css('display', 'none');
                }
            });
        });
    })(jQuery);</script>



<table class="form-table">
    <tbody>
    <tr>
        <th scope="row">
<br>
<font size="1"><table class="xdebug-error xe-uncaught-exception" dir="ltr" border="1" cellspacing="0" cellpadding="1">
<tr><th align="left" bgcolor="#f57900" colspan="5">
<span style="background-color: #cc0000; color: #fce94f; font-size: x-large;">( ! )</span> Fatal error: Uncaught Error: Call to undefined function _e() in C:\wamp64\www\wordpress\wp-content\plugins\nextend-facebook-connect\admin\templates\settings\general.php on line <i>43</i>
</th></tr>
<tr><th align="left" bgcolor="#f57900" colspan="5">
<span style="background-color: #cc0000; color: #fce94f; font-size: x-large;">( ! )</span> Error: Call to undefined function _e() in C:\wamp64\www\wordpress\wp-content\plugins\nextend-facebook-connect\admin\templates\settings\general.php on line <i>43</i>
</th></tr>
<tr><th align="left" bgcolor="#e9b96e" colspan="5">Call Stack</th></tr>
<tr>
<th align="center" bgcolor="#eeeeec">#</th>
<th align="left" bgcolor="#eeeeec">Time</th>
<th align="left" bgcolor="#eeeeec">Memory</th>
<th align="left" bgcolor="#eeeeec">Function</th>
<th align="left" bgcolor="#eeeeec">Location</th>
</tr>
<tr>
<td bgcolor="#eeeeec" align="center">1</td>
<td bgcolor="#eeeeec" align="center">0.4696</td>
<td bgcolor="#eeeeec" align="right">381920</td>
<td bgcolor="#eeeeec">{main}(  )</td>
<td title="C:\wamp64\www\wordpress\wp-content\plugins\nextend-facebook-connect\admin\templates\settings\general.php" bgcolor="#eeeeec">...\general.php<b>:</b>0</td>
</tr>
</table></font>
</th>
</tr>
</tbody>
</table>