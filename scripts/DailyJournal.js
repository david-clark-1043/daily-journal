import { Entries } from "./Entries.js"
import { generateForm } from "./generateForm.js"

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <div class="entryList">
            ${ Entries() }
        </div>

        
        <article class="entryForm">
           ${ generateForm() }
        </article>
    `
}