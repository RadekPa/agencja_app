import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BytesNullableFilterObjectSchema as BytesNullableFilterObjectSchema } from './BytesNullableFilter.schema'

const sysdiagramswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => sysdiagramsWhereInputObjectSchema), z.lazy(() => sysdiagramsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => sysdiagramsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => sysdiagramsWhereInputObjectSchema), z.lazy(() => sysdiagramsWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(128)]).optional(),
  principal_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  diagram_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  version: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  definition: z.union([z.lazy(() => BytesNullableFilterObjectSchema), z.instanceof(Uint8Array)]).optional().nullable()
}).strict();
export const sysdiagramsWhereInputObjectSchema: z.ZodType<Prisma.sysdiagramsWhereInput> = sysdiagramswhereinputSchema as unknown as z.ZodType<Prisma.sysdiagramsWhereInput>;
export const sysdiagramsWhereInputObjectZodSchema = sysdiagramswhereinputSchema;
