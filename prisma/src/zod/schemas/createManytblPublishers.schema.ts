import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersCreateManyInputObjectSchema as tblPublishersCreateManyInputObjectSchema } from './objects/tblPublishersCreateManyInput.schema';

export const tblPublishersCreateManySchema: z.ZodType<Prisma.tblPublishersCreateManyArgs> = z.object({ data: z.union([ tblPublishersCreateManyInputObjectSchema, z.array(tblPublishersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPublishersCreateManyArgs>;

export const tblPublishersCreateManyZodSchema = z.object({ data: z.union([ tblPublishersCreateManyInputObjectSchema, z.array(tblPublishersCreateManyInputObjectSchema) ]),  }).strict();