/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""

    for (const entry of entries) {
        allEntriesAsHTML += `
        <section class="singleEntry" id="${entry.id}>
            <div class="entryDate">
                <p>Date:</p> 
                ${entry.date}
            </div>
            <div class="entryConcept">
                <p>Concept:</p> 
                ${entry.concept}
            </div>
            <div class="entryContent">
                <p>Entry:</p>
                ${entry.entry}
            </div>
            <div class="entryMood">
                <p>Mood:</p> 
                ${entry.mood}
            </div>
            <button class="deleteButton">Delete Entry</button>
            <button class="editButton">Edit Entry</button>
        </section>
        `
    }

    return allEntriesAsHTML
}