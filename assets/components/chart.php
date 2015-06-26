<form class="form-vote" method="POST" action="vote_server.php">
    <div class="row">
        <div class="large-8 columns large-centered">
            <div class="row collapse">
                <div class="small-9 columns">
                    <select name="branch" id="branch">
                        <option value="" disabled selected>Vote for your branch now!</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Production">Production</option>
                        <option value="C.S.E">C.S.E</option>
                        <option value="I.T.">I.T.</option>
                        <option value="Civil">Civil</option>
                        <option value="Chemical">Chemical</option>
                        <option value="Metal">Metal</option>
                        <option value="Mining">Mining</option>
                    </select>
                </div>
                <div class="small-3 columns">
                    <button type="submit" class="button postfix vote-btn">Go</button>
                </div>
            </div>
            <div id="imp">
            <input type="hidden" value="sauravskumar" name="dwx">
            </div>
        </div>
    </div>
</form>
<div id="container"></div>