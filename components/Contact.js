import React from 'react';
export const Contact = () => (<section>
    <form method='post' action='#'>
        <div class='row gtr-50'>
            <div class='col-6 col-12-small'>
                <input type='text' name='name' id='contact-name' placeholder='Name' />
            </div>
            <div class='col-6 col-12-small'>
                <input type='text' name='email' id='contact-email' placeholder='Email' />
            </div>
            <div class='col-12'>
                <textarea name='message' id='contact-message' placeholder='Message' rows='4'></textarea>
            </div>
            <div class='col-12'>
                <ul class='actions'>
                    <li>
                        <input type='submit' class='style1' value='Send' />
                    </li>
                    <li>
                        <input type='reset' class='style2' value='Reset' />
                    </li>
                </ul>
            </div>
        </div>
    </form>
</section>);
