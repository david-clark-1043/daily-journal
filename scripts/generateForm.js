


export const generateForm = () => {
    let htmlString = `<form class="entriesForm">
<fieldset>
    <label for="entryDate">Date</label>
    <input type="date" name="entryDate" class="entryForm__date">
</fieldset>
<fieldset>
    <label for="entryConcepts">Concepts Covered</label>
    <input type="text" name="entryConcepts" class="entryForm__concepts">
</fieldset>
<fieldset>
    <label for="entryContent">Content</label>
    <input type="textarea" name="entryContent" class="entryForm__content">
</fieldset>
<fieldset>
    <label for="entryMood">Mood</label>
    <select id="entryMood" name="Mood" class="entryForm__mood">
        <option value="sad">Sad</option>
        <option value="happy">Happy</option>
        <option value="neutral">Neutral</option>
    </select>
</fieldset>
<input type="submit" class="recordEntryButton" value="Submit Entry">
</form>`

    return htmlString

}