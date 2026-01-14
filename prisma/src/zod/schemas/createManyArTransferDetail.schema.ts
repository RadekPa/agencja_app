import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailCreateManyInputObjectSchema as ArTransferDetailCreateManyInputObjectSchema } from './objects/ArTransferDetailCreateManyInput.schema';

export const ArTransferDetailCreateManySchema: z.ZodType<Prisma.ArTransferDetailCreateManyArgs> = z.object({ data: z.union([ ArTransferDetailCreateManyInputObjectSchema, z.array(ArTransferDetailCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailCreateManyArgs>;

export const ArTransferDetailCreateManyZodSchema = z.object({ data: z.union([ ArTransferDetailCreateManyInputObjectSchema, z.array(ArTransferDetailCreateManyInputObjectSchema) ]),  }).strict();