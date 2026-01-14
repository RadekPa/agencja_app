import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonSelectObjectSchema as tblPersonSelectObjectSchema } from './objects/tblPersonSelect.schema';
import { tblPersonWhereUniqueInputObjectSchema as tblPersonWhereUniqueInputObjectSchema } from './objects/tblPersonWhereUniqueInput.schema';
import { tblPersonCreateInputObjectSchema as tblPersonCreateInputObjectSchema } from './objects/tblPersonCreateInput.schema';
import { tblPersonUncheckedCreateInputObjectSchema as tblPersonUncheckedCreateInputObjectSchema } from './objects/tblPersonUncheckedCreateInput.schema';
import { tblPersonUpdateInputObjectSchema as tblPersonUpdateInputObjectSchema } from './objects/tblPersonUpdateInput.schema';
import { tblPersonUncheckedUpdateInputObjectSchema as tblPersonUncheckedUpdateInputObjectSchema } from './objects/tblPersonUncheckedUpdateInput.schema';

export const tblPersonUpsertOneSchema: z.ZodType<Prisma.tblPersonUpsertArgs> = z.object({ select: tblPersonSelectObjectSchema.optional(),  where: tblPersonWhereUniqueInputObjectSchema, create: z.union([ tblPersonCreateInputObjectSchema, tblPersonUncheckedCreateInputObjectSchema ]), update: z.union([ tblPersonUpdateInputObjectSchema, tblPersonUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPersonUpsertArgs>;

export const tblPersonUpsertOneZodSchema = z.object({ select: tblPersonSelectObjectSchema.optional(),  where: tblPersonWhereUniqueInputObjectSchema, create: z.union([ tblPersonCreateInputObjectSchema, tblPersonUncheckedCreateInputObjectSchema ]), update: z.union([ tblPersonUpdateInputObjectSchema, tblPersonUncheckedUpdateInputObjectSchema ]) }).strict();