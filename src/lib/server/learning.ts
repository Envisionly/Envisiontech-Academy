import { prismaClient } from './connections';

export async function getSections() {
	return prismaClient.section.findMany();
}

export async function getCourses() {
	return prismaClient.course.findMany();
}

export async function getSectionsWithCoursesModulesAndLessons() {
	return prismaClient.section.findMany({
		include: {
			courses: {
				include: {
					modules: {
						include: {
							lessons: true
						}
					}
				}
			}
		}
	});
}

export async function getLessonBySlug(
	sectionSlug: string,
	courseSlug: string,
	moduleSlug: string,
	lessonSlug: string
) {
	return await prismaClient.section.findFirst({
		where: {
			slug: sectionSlug
		},
		include: {
			courses: {
				where: {
					slug: courseSlug
				},
				include: {
					modules: {
						where: {
							slug: moduleSlug
						},
						include: {
							lessons: {
								where: {
									slug: lessonSlug
								}
							}
						}
					}
				}
			}
		}
	});
}
