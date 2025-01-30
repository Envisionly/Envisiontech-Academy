import { prismaClient } from './connections';
import type { sectionType, courseType, moduleType, lessonType } from '../../ambient';

export async function getSections(): Promise<sectionType[]> {
	return prismaClient.section.findMany();
}

export async function getCourses(): Promise<courseType[]> {
	return prismaClient.course.findMany();
}

export async function getModules(): Promise<moduleType[]> {
	return prismaClient.module.findMany();
}

export async function getLessons(): Promise<lessonType[]> {
	return prismaClient.lesson.findMany();
}

export async function getSectionsWithCoursesModulesAndLessons(): Promise<sectionType[]> {
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
): Promise<sectionType | null> {
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
