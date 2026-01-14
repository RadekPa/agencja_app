import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsSelectObjectSchema as tblSubmissionsSelectObjectSchema } from './objects/tblSubmissionsSelect.schema';
import { tblSubmissionsIncludeObjectSchema as tblSubmissionsIncludeObjectSchema } from './objects/tblSubmissionsInclude.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './objects/tblSubmissionsWhereUniqueInput.schema';

export const tblSubmissionsFindUniqueOrThrowSchema: z.ZodType<Prisma.tblSubmissionsFindUniqueOrThrowArgs> = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), where: tblSubmissionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsFindUniqueOrThrowArgs>;

export const tblSubmissionsFindUniqueOrThrowZodSchema = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), where: tblSubmissionsWhereUniqueInputObjectSchema }).strict();