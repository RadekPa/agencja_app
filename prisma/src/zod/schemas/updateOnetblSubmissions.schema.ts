import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsSelectObjectSchema as tblSubmissionsSelectObjectSchema } from './objects/tblSubmissionsSelect.schema';
import { tblSubmissionsIncludeObjectSchema as tblSubmissionsIncludeObjectSchema } from './objects/tblSubmissionsInclude.schema';
import { tblSubmissionsUpdateInputObjectSchema as tblSubmissionsUpdateInputObjectSchema } from './objects/tblSubmissionsUpdateInput.schema';
import { tblSubmissionsUncheckedUpdateInputObjectSchema as tblSubmissionsUncheckedUpdateInputObjectSchema } from './objects/tblSubmissionsUncheckedUpdateInput.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './objects/tblSubmissionsWhereUniqueInput.schema';

export const tblSubmissionsUpdateOneSchema: z.ZodType<Prisma.tblSubmissionsUpdateArgs> = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), data: z.union([tblSubmissionsUpdateInputObjectSchema, tblSubmissionsUncheckedUpdateInputObjectSchema]), where: tblSubmissionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateArgs>;

export const tblSubmissionsUpdateOneZodSchema = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), data: z.union([tblSubmissionsUpdateInputObjectSchema, tblSubmissionsUncheckedUpdateInputObjectSchema]), where: tblSubmissionsWhereUniqueInputObjectSchema }).strict();