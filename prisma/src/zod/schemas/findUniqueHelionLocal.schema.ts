import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalSelectObjectSchema as HelionLocalSelectObjectSchema } from './objects/HelionLocalSelect.schema';
import { HelionLocalWhereUniqueInputObjectSchema as HelionLocalWhereUniqueInputObjectSchema } from './objects/HelionLocalWhereUniqueInput.schema';

export const HelionLocalFindUniqueSchema: z.ZodType<Prisma.HelionLocalFindUniqueArgs> = z.object({ select: HelionLocalSelectObjectSchema.optional(),  where: HelionLocalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HelionLocalFindUniqueArgs>;

export const HelionLocalFindUniqueZodSchema = z.object({ select: HelionLocalSelectObjectSchema.optional(),  where: HelionLocalWhereUniqueInputObjectSchema }).strict();