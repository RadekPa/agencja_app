import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginSelectObjectSchema as tblPersonLoginSelectObjectSchema } from './objects/tblPersonLoginSelect.schema';
import { tblPersonLoginWhereUniqueInputObjectSchema as tblPersonLoginWhereUniqueInputObjectSchema } from './objects/tblPersonLoginWhereUniqueInput.schema';
import { tblPersonLoginCreateInputObjectSchema as tblPersonLoginCreateInputObjectSchema } from './objects/tblPersonLoginCreateInput.schema';
import { tblPersonLoginUncheckedCreateInputObjectSchema as tblPersonLoginUncheckedCreateInputObjectSchema } from './objects/tblPersonLoginUncheckedCreateInput.schema';
import { tblPersonLoginUpdateInputObjectSchema as tblPersonLoginUpdateInputObjectSchema } from './objects/tblPersonLoginUpdateInput.schema';
import { tblPersonLoginUncheckedUpdateInputObjectSchema as tblPersonLoginUncheckedUpdateInputObjectSchema } from './objects/tblPersonLoginUncheckedUpdateInput.schema';

export const tblPersonLoginUpsertOneSchema: z.ZodType<Prisma.tblPersonLoginUpsertArgs> = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema, create: z.union([ tblPersonLoginCreateInputObjectSchema, tblPersonLoginUncheckedCreateInputObjectSchema ]), update: z.union([ tblPersonLoginUpdateInputObjectSchema, tblPersonLoginUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginUpsertArgs>;

export const tblPersonLoginUpsertOneZodSchema = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema, create: z.union([ tblPersonLoginCreateInputObjectSchema, tblPersonLoginUncheckedCreateInputObjectSchema ]), update: z.union([ tblPersonLoginUpdateInputObjectSchema, tblPersonLoginUncheckedUpdateInputObjectSchema ]) }).strict();