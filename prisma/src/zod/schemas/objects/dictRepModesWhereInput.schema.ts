import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblClients_obsoleteListRelationFilterObjectSchema as TblClients_obsoleteListRelationFilterObjectSchema } from './TblClients_obsoleteListRelationFilter.schema'

const dictrepmodeswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRepModesWhereInputObjectSchema), z.lazy(() => dictRepModesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRepModesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRepModesWhereInputObjectSchema), z.lazy(() => dictRepModesWhereInputObjectSchema).array()]).optional(),
  RepModeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  RepModeDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  tblClients_obsolete: z.lazy(() => TblClients_obsoleteListRelationFilterObjectSchema).optional()
}).strict();
export const dictRepModesWhereInputObjectSchema: z.ZodType<Prisma.dictRepModesWhereInput> = dictrepmodeswhereinputSchema as unknown as z.ZodType<Prisma.dictRepModesWhereInput>;
export const dictRepModesWhereInputObjectZodSchema = dictrepmodeswhereinputSchema;
