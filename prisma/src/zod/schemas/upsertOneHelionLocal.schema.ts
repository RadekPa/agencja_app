import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalSelectObjectSchema as HelionLocalSelectObjectSchema } from './objects/HelionLocalSelect.schema';
import { HelionLocalWhereUniqueInputObjectSchema as HelionLocalWhereUniqueInputObjectSchema } from './objects/HelionLocalWhereUniqueInput.schema';
import { HelionLocalCreateInputObjectSchema as HelionLocalCreateInputObjectSchema } from './objects/HelionLocalCreateInput.schema';
import { HelionLocalUncheckedCreateInputObjectSchema as HelionLocalUncheckedCreateInputObjectSchema } from './objects/HelionLocalUncheckedCreateInput.schema';
import { HelionLocalUpdateInputObjectSchema as HelionLocalUpdateInputObjectSchema } from './objects/HelionLocalUpdateInput.schema';
import { HelionLocalUncheckedUpdateInputObjectSchema as HelionLocalUncheckedUpdateInputObjectSchema } from './objects/HelionLocalUncheckedUpdateInput.schema';

export const HelionLocalUpsertOneSchema: z.ZodType<Prisma.HelionLocalUpsertArgs> = z.object({ select: HelionLocalSelectObjectSchema.optional(),  where: HelionLocalWhereUniqueInputObjectSchema, create: z.union([ HelionLocalCreateInputObjectSchema, HelionLocalUncheckedCreateInputObjectSchema ]), update: z.union([ HelionLocalUpdateInputObjectSchema, HelionLocalUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.HelionLocalUpsertArgs>;

export const HelionLocalUpsertOneZodSchema = z.object({ select: HelionLocalSelectObjectSchema.optional(),  where: HelionLocalWhereUniqueInputObjectSchema, create: z.union([ HelionLocalCreateInputObjectSchema, HelionLocalUncheckedCreateInputObjectSchema ]), update: z.union([ HelionLocalUpdateInputObjectSchema, HelionLocalUncheckedUpdateInputObjectSchema ]) }).strict();