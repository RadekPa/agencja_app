import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersSelectObjectSchema as tblPublishersSelectObjectSchema } from './objects/tblPublishersSelect.schema';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './objects/tblPublishersInclude.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './objects/tblPublishersWhereUniqueInput.schema';
import { tblPublishersCreateInputObjectSchema as tblPublishersCreateInputObjectSchema } from './objects/tblPublishersCreateInput.schema';
import { tblPublishersUncheckedCreateInputObjectSchema as tblPublishersUncheckedCreateInputObjectSchema } from './objects/tblPublishersUncheckedCreateInput.schema';
import { tblPublishersUpdateInputObjectSchema as tblPublishersUpdateInputObjectSchema } from './objects/tblPublishersUpdateInput.schema';
import { tblPublishersUncheckedUpdateInputObjectSchema as tblPublishersUncheckedUpdateInputObjectSchema } from './objects/tblPublishersUncheckedUpdateInput.schema';

export const tblPublishersUpsertOneSchema: z.ZodType<Prisma.tblPublishersUpsertArgs> = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema, create: z.union([ tblPublishersCreateInputObjectSchema, tblPublishersUncheckedCreateInputObjectSchema ]), update: z.union([ tblPublishersUpdateInputObjectSchema, tblPublishersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPublishersUpsertArgs>;

export const tblPublishersUpsertOneZodSchema = z.object({ select: tblPublishersSelectObjectSchema.optional(), include: tblPublishersIncludeObjectSchema.optional(), where: tblPublishersWhereUniqueInputObjectSchema, create: z.union([ tblPublishersCreateInputObjectSchema, tblPublishersUncheckedCreateInputObjectSchema ]), update: z.union([ tblPublishersUpdateInputObjectSchema, tblPublishersUncheckedUpdateInputObjectSchema ]) }).strict();