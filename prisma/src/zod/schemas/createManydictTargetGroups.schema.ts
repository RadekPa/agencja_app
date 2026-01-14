import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsCreateManyInputObjectSchema as dictTargetGroupsCreateManyInputObjectSchema } from './objects/dictTargetGroupsCreateManyInput.schema';

export const dictTargetGroupsCreateManySchema: z.ZodType<Prisma.dictTargetGroupsCreateManyArgs> = z.object({ data: z.union([ dictTargetGroupsCreateManyInputObjectSchema, z.array(dictTargetGroupsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsCreateManyArgs>;

export const dictTargetGroupsCreateManyZodSchema = z.object({ data: z.union([ dictTargetGroupsCreateManyInputObjectSchema, z.array(dictTargetGroupsCreateManyInputObjectSchema) ]),  }).strict();