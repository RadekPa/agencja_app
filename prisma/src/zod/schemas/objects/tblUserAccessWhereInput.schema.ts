import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { TblPlacesScalarRelationFilterObjectSchema as TblPlacesScalarRelationFilterObjectSchema } from './TblPlacesScalarRelationFilter.schema';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './tblPlacesWhereInput.schema';
import { TblUsersScalarRelationFilterObjectSchema as TblUsersScalarRelationFilterObjectSchema } from './TblUsersScalarRelationFilter.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema'

const tbluseraccesswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblUserAccessWhereInputObjectSchema), z.lazy(() => tblUserAccessWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblUserAccessWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblUserAccessWhereInputObjectSchema), z.lazy(() => tblUserAccessWhereInputObjectSchema).array()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  PlaceID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  tblPlaces: z.union([z.lazy(() => TblPlacesScalarRelationFilterObjectSchema), z.lazy(() => tblPlacesWhereInputObjectSchema)]).optional(),
  tblUsers: z.union([z.lazy(() => TblUsersScalarRelationFilterObjectSchema), z.lazy(() => tblUsersWhereInputObjectSchema)]).optional()
}).strict();
export const tblUserAccessWhereInputObjectSchema: z.ZodType<Prisma.tblUserAccessWhereInput> = tbluseraccesswhereinputSchema as unknown as z.ZodType<Prisma.tblUserAccessWhereInput>;
export const tblUserAccessWhereInputObjectZodSchema = tbluseraccesswhereinputSchema;
