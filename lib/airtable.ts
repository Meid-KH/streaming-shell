const Airtable = require("airtable")

// Authenticate
Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
})

// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID)

// Reference a table
const contact = base(process.env.NEXT_PUBLIC_AIRTABLE_CONTACT_TABLE_NAME)
const newsletter = base(
  process.env.NEXT_PUBLIC_AIRTABLE_NEWSLETTER_CONTACT_TABLE_NAME
)

export { contact, newsletter }
