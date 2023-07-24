function skillsMember() {
  const member = document.getElementById('member');
  const memberSkills = document.getElementById('member-skills');
  const memberSkillsClose = document.getElementById('member-skills-close');

  member.addEventListener('click', () => {
    memberSkills.classList.add('active');
  });

  memberSkillsClose.addEventListener('click', () => {
    memberSkills.classList.remove('active');
  });
}