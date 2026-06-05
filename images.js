/**
 * JLEM BUILDERS — Image Registry
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW PROJECT
 *   1. Create a folder inside:  assets/images/projects/your-project-name/
 *   2. Upload all project photos into that folder
 *   3. Add a new project block below following the template
 *   4. Commit and push — done
 *
 * HOW TO ADD MORE PHOTOS TO AN EXISTING PROJECT
 *   1. Upload the photo to the existing project folder
 *   2. Add the file path to that project's `images` array below
 *   3. Commit and push
 *
 * PROJECT BLOCK TEMPLATE
 * ──────────────────────
 *   {
 *     id:      "unique-id",           // short slug, no spaces
 *     title:   "Project Title",
 *     tag:     "Category Label",      // e.g. Waterproofing, Electrical, Tiles
 *     caption: "Brief description",
 *     cover:   "assets/images/projects/your-folder/cover.jpg",
 *     images: [
 *       "assets/images/projects/your-folder/photo1.jpg",
 *       "assets/images/projects/your-folder/photo2.jpg"
 *     ]
 *   }
 *
 * FOLDER STRUCTURE
 * ──────────────────────────────────────────────
 *   assets/
 *   └── images/
 *       └── projects/
 *           ├── project-1/    <-- wall cladding
 *           ├── project-2/    <-- add your next project here
 *           └── project-3/
 * ─────────────────────────────────────────────────────────────────────────────
 */

const PROJECTS = [

  // ── PROJECT 1 ────────────────────────────────────────────────────────────
  // Folder: assets/images/projects/project-1/
  {
    id:      "project-1",
    title:   "Second Floor Wall Cladding",
    tag:     "Wall Cladding",
    caption: "Metal panel facade installation · Mabalacat City · 2025",
    cover:   "assets/images/projects/project-1/cover.jpg",
    images: [
      "assets/images/projects/project-1/cover.jpg"
      // Add more images here:
      // "assets/images/projects/project-1/photo2.jpg",
      // "assets/images/projects/project-1/photo3.jpg"
    ]
  },

  // ── PROJECT 2 ────────────────────────────────────────────────────────────
  // Folder: assets/images/projects/project-2/
  // {
  //   id:      "project-2",
  //   title:   "Your Project Title",
  //   tag:     "Service Type",
  //   caption: "Brief description · Location · Year",
  //   cover:   "assets/images/projects/project-2/cover.jpg",
  //   images: [
  //     "assets/images/projects/project-2/cover.jpg",
  //     "assets/images/projects/project-2/photo2.jpg"
  //   ]
  // },

];
