import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsSelectObjectSchema as tblSubmissionsSelectObjectSchema } from './objects/tblSubmissionsSelect.schema';
import { tblSubmissionsIncludeObjectSchema as tblSubmissionsIncludeObjectSchema } from './objects/tblSubmissionsInclude.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './objects/tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsCreateInputObjectSchema as tblSubmissionsCreateInputObjectSchema } from './objects/tblSubmissionsCreateInput.schema';
import { tblSubmissionsUncheckedCreateInputObjectSchema as tblSubmissionsUncheckedCreateInputObjectSchema } from './objects/tblSubmissionsUncheckedCreateInput.schema';
import { tblSubmissionsUpdateInputObjectSchema as tblSubmissionsUpdateInputObjectSchema } from './objects/tblSubmissionsUpdateInput.schema';
import { tblSubmissionsUncheckedUpdateInputObjectSchema as tblSubmissionsUncheckedUpdateInputObjectSchema } from './objects/tblSubmissionsUncheckedUpdateInput.schema';

export const tblSubmissionsUpsertOneSchema: z.ZodType<Prisma.tblSubmissionsUpsertArgs> = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), where: tblSubmissionsWhereUniqueInputObjectSchema, create: z.union([ tblSubmissionsCreateInputObjectSchema, tblSubmissionsUncheckedCreateInputObjectSchema ]), update: z.union([ tblSubmissionsUpdateInputObjectSchema, tblSubmissionsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsUpsertArgs>;

export const tblSubmissionsUpsertOneZodSchema = z.object({ select: tblSubmissionsSelectObjectSchema.optional(), include: tblSubmissionsIncludeObjectSchema.optional(), where: tblSubmissionsWhereUniqueInputObjectSchema, create: z.union([ tblSubmissionsCreateInputObjectSchema, tblSubmissionsUncheckedCreateInputObjectSchema ]), update: z.union([ tblSubmissionsUpdateInputObjectSchema, tblSubmissionsUncheckedUpdateInputObjectSchema ]) }).strict();