const readline = require("readline-sync");
const fetch = require("node-fetch");
async function searchJobs(keyword,location) {
  const url = `https://remotive.com/api/remote-jobs?search=${keyword}&location=${location}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const filtered = data.jobs.filter(job => {
    const loc = job.candidate_required_location || ""; // fallback if undefined
    return loc.toLowerCase().includes(location.toLowerCase()) || loc.toLowerCase().includes("worldwide");
  });

  return filtered.slice(0, 5).map(j => ({
    title: j.title,
    company: j.company_name,
    location: j.candidate_required_location,
    url: j.url
  }));
}
async function main() {
  console.log("\n   Finding Internships    ");

  while (true) {
    const keyword = readline.question("\n Enter the internship qualification you are looking for (or press Enter to exit): ");
    if (!keyword) break;

    const location = readline.question("\n Enter location: ");

    console.log("\n Searching for Internships....");
    const jobs = await searchJobs(keyword,location);

    if (jobs.length === 0) {
      console.log("No internships found. Try searching a different qualification or location");
    } else {
      console.log("\n Internships found:");
      jobs.forEach((job, i) => {
        console.log(`${i + 1}. ${job.title}`);
        console.log(`Company: ${job.company}`);
        console.log(`Location: ${job.location}`);
        console.log(`Apply here: ${job.url}\n`);
      });
    }
  }
  console.log("Thankyou..We are here to help anytime!!");
}
  main();