import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalSelectObjectSchema as HelionLocalSelectObjectSchema } from './objects/HelionLocalSelect.schema';
import { HelionLocalUpdateInputObjectSchema as HelionLocalUpdateInputObjectSchema } from './objects/HelionLocalUpdateInput.schema';
import { HelionLocalUncheckedUpdateInputObjectSchema as HelionLocalUncheckedUpdateInputObjectSchema } from './objects/HelionLocalUncheckedUpdateInput.schema';
import { HelionLocalWhereUniqueInputObjectSchema as HelionLocalWhereUniqueInputObjectSchema } from './objects/HelionLocalWhereUniqueInput.schema';

export const HelionLocalUpdateOneSchema: z.ZodType<Prisma.HelionLocalUpdateArgs> = z.object({ select: HelionLocalSelectObjectSchema.optional(),  data: z.union([HelionLocalUpdateInputObjectSchema, HelionLocalUncheckedUpdateInputObjectSchema]), where: HelionLocalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HelionLocalUpdateArgs>;

export const HelionLocalUpdateOneZodSchema = z.object({ select: HelionLocalSelectObjectSchema.optional(),  data: z.union([HelionLocalUpdateInputObjectSchema, HelionLocalUncheckedUpdateInputObjectSchema]), where: HelionLocalWhereUniqueInputObjectSchema }).strict();