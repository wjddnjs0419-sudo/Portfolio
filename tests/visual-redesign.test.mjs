import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const hero = read('sections/hero.jsx');
const projects = read('sections/projects.jsx');
const experience = read('sections/experience.jsx');
const skills = read('sections/skills.jsx');
const contact = read('sections/contact.jsx');

assert.match(hero, /hero-orbit/, 'Hero should include the orbit visual treatment');
assert.match(hero, /proof-strip/, 'Hero should render one connected proof strip');
assert.doesNotMatch(hero, /hobbies\.map/, 'Hero should no longer render the hobby expansion grid');

assert.match(projects, /ProjectVisualCollage/, 'Projects should use the editorial visual collage');
assert.match(projects, /project-editorial/, 'Projects should use editorial case-study layouts');

assert.match(experience, /featured-experience/, 'Paris 2024 should render as the featured experience');

assert.match(skills, /capability-pillars/, 'Skills should render capability pillars');
assert.doesNotMatch(skills, /level \* 100/, 'Language proficiency should not use percentage bars');

assert.match(contact, /즉시 근무 가능/, 'Korean contact status should show immediate availability');
assert.match(contact, /Available immediately/, 'English contact status should show immediate availability');

console.log('visual redesign source checks passed');
