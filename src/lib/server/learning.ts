import { prismaClient } from './connections';

export async function getSections() {
	return prismaClient.section.findMany();
}

export async function getCourses() {
	return prismaClient.course.findMany();
}

export async function getSectionsWithCourses() {
	return prismaClient.section.findMany({
		include: {
			courses: true
		}
	});
}
